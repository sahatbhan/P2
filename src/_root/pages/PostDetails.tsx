import { useGetPostById } from "@/lib/react-query/queriesAndMutations";
import { formatDateString } from "@/lib/utils";
import Loader from "@/components/shared/Loader";
import { useParams, Link } from "react-router-dom";

export const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || '');

  return (
    <div className="post_details-container">
      {isPending ? <Loader /> : (
        <div className="post_details-card">
          <img
            src={post?.imageUrl}
            alt="post"
            className="post_details-img"
          />

          <div className="post_details-info"></div>
          <div className="flex items-center gap-3">
            <Link to={`/profile/${post?.creator.$id}`}>
              <img
                src={post?.creator?.imageUrl || 'assets/icons/profile-placeholder.svg'}
                alt='creator'
                className="rounded-full w-12 lg:hg-12" />
            </Link>

            <div className="flex flex-col">
              <p className="base-medium lg:body-bold text-light-1">
                {post?.creator.name}
              </p>
              <div className="flex-center gap-2 text-light-3">
                <p className="subtle-semibold lg:small-regular">
                  {formatDateString(post?.createdAt)}
                </p>
                -
                <p className="subtle-semibold lg:small-regular">
                  {post?.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
