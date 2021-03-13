import { useLocation } from 'react-router-dom';

function useQueryParams(key: string): string | undefined {
  const location = useLocation();

  const param = new URLSearchParams(location.search).get(key);

  return param || undefined;
}

export default useQueryParams;
