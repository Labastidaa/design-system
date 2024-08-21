import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Button } from "../button/Button";

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [copy, setCopy] = useState(false);

  return (
    <div className="flex min-w-[500px] flex-col border-muted border overflow-hidden rounded-lg shadow-lg code-block_wrapper__t6FC0">
      <div className="justify-between w-full code-block_header px-5 h-[70px] flex items-center bg-[#212121] text-white font-bold">
        <p>Codeblock Header</p>
        <span className="flex items-center gap-1">
          <Button
            onClick={() => {
              navigator.clipboard.writeText(code).then(() => {
                setCopy(true);
                setTimeout(() => setCopy(false), 2000); // Reset copy state after 2 seconds
              });
            }}
            variant={"outline"}
            className="text-white flex items-center gap-1"
          >
            {copy ? <CheckIcon /> : <CopyIcon />}
            {copy ? "Copied!" : "Copy"}
          </Button>
        </span>
      </div>
      <SyntaxHighlighter
        // customStyle={}
        language="tailwind"
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers={true}
        style={atomOneDark}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
