import { getPost } from "@/app/lib/data"
import Post from '@/app/ui/post'
export default async function Page({ params }: { params: { id: string }}) {
  const post = await getPost(params.id)
  return (
    <div className="text-center">
      {<Post postObj={post} isMinimized={false} />}
    </div>
  )
}