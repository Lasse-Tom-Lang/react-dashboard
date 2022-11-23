import CountUp from 'react-countup';

interface UsersOnlineProps {
  usersOnline: number
}

const UsersOnline: React.FC<UsersOnlineProps> = (porps) => {

  return (
    <div className="widget" id="usersOnline">
        <CountUp end={porps.usersOnline} duration={1} />
        <p>
          Users online
        </p>
      </div>
  );
}

export default UsersOnline