import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const markdownDir = path.join(process.cwd(), 'markdowns');
  const files = fs.existsSync(markdownDir) ? fs.readdirSync(markdownDir) : [];
  const markdownFiles = files.filter(file => file.endsWith('.md'));

  const fileContents = markdownFiles.map(file => {
    const content = fs.readFileSync(path.join(markdownDir, file), 'utf-8');
    return { name: file, content };
  });

  return new Response(JSON.stringify(fileContents), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",  // <-- Enables access from any origin
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json"
    }
  });  
}


export async function OPTIONS() {
    return new Response(null, {
        status: 204,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "*",
        }
    });
}