import IHealthCheckResult from './health-check-result';
import { useHealthCheckQuery } from './system-status-api-slice';

export function SystemStatus() {
  const { data, error, isFetching, isLoading } = useHealthCheckQuery();
  // evaluate error before data
  const queryData = (error as { data: any })?.data as IHealthCheckResult || data as IHealthCheckResult;

  let content;
  if (isLoading || isFetching) {
    content = 'loading'
  } else if (queryData?.status === 'ok') {
    content = 'ok';
  } else {
    content = 'error';
  }

  return (
    <div className='system-status'><span>System </span><span>{content}</span></div>
  );
}