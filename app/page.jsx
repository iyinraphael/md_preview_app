'use client';
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { marked } from "marked";
import "github-markdown-css/github-markdown.css";

export default function MarkdownPreviewer() {
  const [filesContent, setFilesContent] = useState({});
  const [markdown, setMarkdown] = useState("");
  const [showEditor, setShowEditor] = useState(false);

  const loadMarkdownFiles = async () => {
    const res = await fetch("/api/markdown-files");
    const files = await res.json();
    const contentMap = {};
    files.forEach(file => {
      contentMap[file.name] = file.content;
    });
    setFilesContent(contentMap);
    setMarkdown(Object.values(contentMap).join("\n\n"));
  };

  return (
    <div className="flex flex-col h-screen px-6 py-4">
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
        <Card className="h-full">
          <CardContent className="p-6 h-full overflow-auto">
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
                      className="markdown-body prose max-w-none"
                      dangerouslySetInnerHTML={{ __html: marked(content) }}
                    />
                  </TabsContent>
                ))}
              </Tabs>
            ) : (
              <div
                className="markdown-body prose max-w-none"
                dangerouslySetInnerHTML={{ __html: marked(markdown) }}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}