export const Head = ({className, children}) => {
    console.log(children);
    return (
    <>
    {children}
    <p className={className}>
      I am Head
    </p>
    </>
    )
  }
  