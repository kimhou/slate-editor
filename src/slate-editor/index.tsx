import React, { ReactElement, useState, useMemo } from 'react';
import { createEditor } from 'slate';
import { Slate, withReact, Editable } from 'slate-react';

interface Props {}

export default function SlateEditor({}: Props): ReactElement {
  const [value, setValue] = useState([{
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  }]);
  const editor = useMemo(() => withReact(createEditor() as any), []);
  return (
    <div>
      <Slate
        editor={editor}
        value={value}
        onChange={(next: any) => setValue(next)}
      >
        <Editable />
      </Slate>
    </div>
  );
}
