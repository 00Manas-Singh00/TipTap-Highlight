import { Extension } from "@tiptap/core";

const HealthAssistant = Extension.create({
  name: "healthAssistant", // Unique name for the extension

  addOptions() {
    return {
      reminderInterval: 20 * 60 * 1000, // Default to 20 minutes
      exerciseList: [
        // List of exercises/messages
        "Stretch your arms!",
        "Stand up and walk around.",
        "Blink your eyes and look at something far away.",
        "Roll your shoulders back and forth.",
        "Take a sip of water.",
      ],
    };
  },

  addStorage() {
    return {
      breakCount: 0, // Initialize break counter
    };
  },

  onCreate() {
    this.checkNotificationPermission(); // Check for notification permissions
    this.startTracking(); // Start tracking time when the editor is created
  },

  checkNotificationPermission() {
    if (Notification.permission === "default") {
      Notification.requestPermission(); // Request permission for notifications
    }
  },

  startTracking() {
    this.trackingInterval = setInterval(() => {
      this.showReminder();
    }, this.options.reminderInterval);
  },

  showReminder() {
    const randomExercise = this.getRandomExercise(); // Get a random exercise from the list
    this.storage.breakCount += 1; // Increment the break counter

    if (Notification.permission === "granted") {
      new Notification("Time to Take a Break!", {
        body: `${randomExercise}\nBreaks Taken: ${this.storage.breakCount}`,
      });
    } else {
      alert(`${randomExercise}\nBreaks Taken: ${this.storage.breakCount}`);
    }
  },

  getRandomExercise() {
    const exercises = this.options.exerciseList;
    const randomIndex = Math.floor(Math.random() * exercises.length);
    return exercises[randomIndex];
  },

  onDestroy() {
    clearInterval(this.trackingInterval); // Stop the timer when the editor is destroyed
  },
});

export default HealthAssistant;
