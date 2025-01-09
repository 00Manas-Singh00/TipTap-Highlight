import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import HealthAssistant from './HealthAssistant';

const createEditor = (selector = '#editor') => {
  const editorElement = document.querySelector(selector);

  if (editorElement) {
    const editor = new Editor({
      element: editorElement,
      extensions: [
        StarterKit,
        HealthAssistant.configure({
          reminderInterval: 10 * 60 * 1000,
          exerciseList: [
            "Stretch your arms above your head.",
            "Look out of the window for 20 seconds.",
            "Take a deep breath and relax.",
            "Do a few quick shoulder rolls.",
            "Drink a glass of water to hydrate.",
          ],
        }),
      ],
      content: '<p>Start writing and remember to take care of yourself!</p>',
    });

    console.log('Tiptap editor initialized!');
    return editor;
  } else {
    console.error('Editor element not found in the DOM!');
    return null;
  }
};

export default createEditor; // Export the function as the default export
