import { PostProps } from "@/interfaces";

type PostCardProps = Pick<PostProps, "title" | "body" | "userId" | "id">;

const PostCard: React.FC<PostCardProps> = ({ title, body, userId, id }) => {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <header className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Post #{id}
          </p>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
          User {userId}
        </span>
      </header>
      <p className="mt-3 text-sm text-gray-600">{body}</p>
    </article>
  );
};

export default PostCard;
