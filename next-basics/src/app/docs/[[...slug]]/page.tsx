function CatchAllSegment({params}: {params: {slug: string[]}}) {
  console.log(params?.slug);
  return (
    <div>For all path under doc this component will render for any level of path also.</div>
  )
}

export default CatchAllSegment