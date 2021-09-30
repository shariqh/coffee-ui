const RoastSlider = ({index, roastLevel}) => {
  return (
    <li className="m-auto font-black text-4xl lg:text-2xl">
      {index == roastLevel && <span>|</span>}
    </li>
  )
}

export {RoastSlider}
