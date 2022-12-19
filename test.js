<>
<h1>Oppgaver</h1>
<div className='cardcontainer'>
<div className='row'>
<div className='col'>



<div className="svg-pi-wrapper" style={{ width: size, height: size }}>



<svg className="svg-pi" style={{ width: size, height: size }}>
  <circle
    className="svg-pi-track"
    cx={center}
    cy={center}
    fill="transparent"
    r={radius}
    stroke={trackColor}
    strokeWidth={trackWidth}
  />



  <circle
    className={`svg-pi-indicator ${
      spinnerMode ? "svg-pi-indicator--spinner" : ""
    }`}
    style={{ animationDuration: spinnerSpeed * 1000 }}
    cx={center}
    cy={center}
    fill="transparent"
    r={radius}
    stroke={indicatorColor}
    strokeWidth={indicatorWidth}
    strokeDasharray={dashArray}
    strokeDashoffset={dashOffset}
    strokeLinecap={indicatorCap}
  />
</svg>













<p class="svg-pi-label-title ">Mine</p>
{!hideLabel && (
  <div 
    className="svg-pi-label" 
    style={{ color: labelColor }}
  >
     <span className="svg-pi-label__loading">
      {label}
    </span>
  </div>
  
)}
</div>
</div>
<div className='col'>
<div className="svg-pi-wrapper" style={{ width: size, height: size }}>
<svg className="svg-pi" style={{ width: size, height: size }}>
<circle
  className="svg-pi-track"
  cx={centerEmpl}
  cy={centerEmpl}
  fill="transparent"
  r={radiusEmpl }
  stroke={trackColor}
  strokeWidth={trackWidth}
/>
<circle
  className={`svg-pi-indicator ${
    spinnerMode ? "svg-pi-indicator--spinner" : ""
  }`}
  style={{ animationDuration: spinnerSpeed * 1000 }}
  cx={centerEmpl}
  cy={centerEmpl}
  fill="transparent"
  r={radiusEmpl}
  stroke={indicatorColor}
  strokeWidth={indicatorWidth}
  strokeDasharray={dashArrayEmpl}
  strokeDashoffset={dashOffsetEmpl}
  strokeLinecap={indicatorCap}
/>
</svg>
<p class="vg-pi-label-title">Ansatte</p>
{!hideLabel && (
<div 
  className="svg-pi-label" 
  style={{ color: labelColor }}
>
   <span className="svg-pi-label__loading">
    {labelEmpl}
  </span>
</div>
)}
 </div>
</div>
    </div>
    </div>



</>


