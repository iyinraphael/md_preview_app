'use client';
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { marked, Renderer } from "marked";
import "github-markdown-css/github-markdown.css";

const renderer = new Renderer();
renderer.link = function (href, title, text) {
  try {
    const safeHref = typeof href === "string" && href.trim() !== "" ? href : "#";
    const safeText = typeof text === "string" ? text : safeHref;
    const escapedHref = safeHref.replace(/"/g, "&quot;");
    const escapedTitle = title ? ` title="${String(title).replace(/"/g, "&quot;")}"` : "";
    return `<a href="${escapedHref}"${escapedTitle} target="_blank" rel="noopener noreferrer">${safeText}</a>`;
  } catch (err) {
    console.warn("Error rendering link:", err, href, title, text);
    return text || "";
  }
};


marked.setOptions({ renderer });

export default function MarkdownPreviewer() {
  const [filesContent, setFilesContent] = useState({});
  const [markdown, setMarkdown] = useState("");
  const [showEditor, setShowEditor] = useState(false);

  const loadMarkdownFiles = async () => {
    try {
      const res = await fetch("/api/markdown-files", {
        headers: {
          "ngrok-skip-browser-warning": "true",
          "Origin": "https://localhost:3000"
        },
        mode: "cors"
      });
      if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

      const files = await res.json();
      const contentMap = {};
      files.forEach(file => {
        contentMap[file.name] = file.content;
      });
      setFilesContent(contentMap);
      setMarkdown(Object.values(contentMap).join("\n\n"));
    } catch (error) {
      console.error("CORS error or fetch failed:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen px-6 py-4 bg-white">
      <div className="mb-4">
        <div className="flex gap-2">
          <Button onClick={loadMarkdownFiles}>Load from Directory</Button>
          <Button variant="outline" onClick={() => setShowEditor(!showEditor)}>
            {showEditor ? "Hide Editor" : "Edit Markdown"}
          </Button>
        </div>
        {showEditor && (
          <div className="mt-4">
            <Textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              rows={20}
              className="w-full"
            />
          </div>
        )}
      </div>
      <div className="flex-1 overflow-auto">
        <div className="h-full border rounded-lg shadow-sm p-6 overflow-auto bg-white">
          <h2 className="text-xl font-semibold mb-4">Preview</h2>
          {Object.keys(filesContent).length > 0 ? (
            <Tabs defaultValue={Object.keys(filesContent)[0]} className="h-full">
              <TabsList>
                {Object.keys(filesContent).map((fileName) => (
                  <TabsTrigger key={fileName} value={fileName}>
                    {fileName}
                  </TabsTrigger>
                ))}
              </TabsList>
              {Object.entries(filesContent).map(([fileName, content]) => (
                <TabsContent key={fileName} value={fileName} className="h-full overflow-auto">
                  <div
                    className="markdown-body prose max-w-none px-4 py-2"
                    dangerouslySetInnerHTML={{ __html: marked(content) }}
                  />
                </TabsContent>
              ))}
            </Tabs>
          ) : (
            <div
              className="markdown-body prose max-w-none px-4 py-2"
              dangerouslySetInnerHTML={{ __html: marked(markdown) }}
            />
          )}
        </div>
      </div>
    </div>
  );
}