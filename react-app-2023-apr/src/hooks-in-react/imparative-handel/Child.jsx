function Child(props, ref) {
  return (
    <div>
      {/* <input {...props} ref={ref}></input> */}
      <input type='text' ref={ref}></input>
    </div>
  )
}

export default Child
