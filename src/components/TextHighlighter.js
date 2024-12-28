import { Mark } from "@tiptap/core";

const TextHighlighter = Mark.create({
  name: "highlight",

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-highlight="true"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      {
        ...HTMLAttributes,
        "data-highlight": "true",
        style: "background-color: yellow;",
      },
      0,
    ];
  },

  addCommands() {
    return {
      toggleHighlight:
        () =>
        ({ commands }) => {
          return commands.toggleMark(this.name);
        },
    };
  },
});

export default TextHighlighter;
