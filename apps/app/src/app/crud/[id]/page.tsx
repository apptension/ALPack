export default function Page({ params }: { params: { id: string } }) {
  return <h1>Details about item {params.id}</h1>;
}
