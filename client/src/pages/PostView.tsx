import { Layout } from "@/components/Layout";
import { getPost } from "@/lib/content";
import { useRoute, Link } from "wouter";
import ReactMarkdown from "react-markdown";
import NotFound from "./not-found";
import { ArrowLeft } from "lucide-react";

export default function PostView() {
  const [match, params] = useRoute("/:type/:slug");
  
  if (!match) return <NotFound />;

  const post = getPost(params.slug);
  
  if (!post || post.type + 's' !== params.type) return <NotFound />;

  return (
    <Layout>
      <article className="max-w-2xl mx-auto">
        <header className="mb-12">
          <Link href={`/${post.type}s`}>
            <a className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {post.type}s
            </a>
          </Link>
          
          <div className="font-mono text-sm text-muted-foreground mb-4">
            {post.date}
          </div>
          
          {post.type === 'essay' && (
            <h1 className="text-3xl md:text-4xl font-serif font-medium leading-tight text-foreground">
              {post.title}
            </h1>
          )}
          
          {post.type === 'note' && (
             <h1 className="text-2xl md:text-3xl font-medium leading-tight text-foreground">
               {post.title}
             </h1>
          )}
        </header>

        <div className="prose-content">
          <ReactMarkdown
             components={{
                h1: ({node, ...props}) => <span className="hidden" {...props} />, // Hide H1 as we render it in header
             }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex justify-between text-sm font-mono text-muted-foreground">
          <span>{post.slug}</span>
          <span>End of file</span>
        </div>
      </article>
    </Layout>
  );
}
