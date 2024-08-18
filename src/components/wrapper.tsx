type WrapperProps = {
    children: React.ReactNode;
    className?:string
}

const Wrapper = ({children, className}: WrapperProps) => {
    return (
        <div className={`px-4 md:px-0 lg:px-[360px] ${className}`}>{children}</div>
    )
}

export default Wrapper;