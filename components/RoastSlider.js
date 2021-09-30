const RoastSlider = ({index, roastLevel}) => {
  return (
    <li className="m-auto font-black text-4xl">
      {index == roastLevel && <p className="">|</p>}
    </li>
  )
}

export {RoastSlider}
