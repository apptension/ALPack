export default function Page({ params }: { params: { id: string } }) {
  return <h1>Edit given page {params.id}</h1>;
}
