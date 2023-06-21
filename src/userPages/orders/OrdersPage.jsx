import DashboardLayout from '../../components/DashboardLayout';
import UserMenu from '../UserMenu';
import AllOrders from './AllOrders';

const OrdersPage = () => {
  return (
    <DashboardLayout
      left={<UserMenu />}
      right={<AllOrders />}
    />
  )
}

export default OrdersPage