interface ServerUtilizationProps {
  serverUtilization: number
}

const ServerUtilization: React.FC<ServerUtilizationProps> = (props) => {
  return (
    <div className="widget">
      <div id="serverUtilization" style={{background: `conic-gradient(rgb(130, 215, 247) ${props.serverUtilization}deg, rgb(230, 230, 230) 0)`}}/>
      <p>
        Server Utilization
      </p>
    </div>
  )
}

export default ServerUtilization