const Hero = (props: {
  MainText: string
  SubText: string
  ButtonLink: string
}) => {
  return (
    <div className="hero min-h-screen bg-gradient-to-br from-green-300 via-blue-500 to-purple-600">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{props.MainText}</h1>
          <p className="py-6">{props.SubText}</p>
          <button className="btn btn-primary">{props.ButtonLink}</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
