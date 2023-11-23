export  default  function Page({params}:{params: {about_id: number}}) {
    return (
        <div>About, id = {params.about_id}</div>
    )
}