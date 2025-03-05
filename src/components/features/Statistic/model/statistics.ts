import { IPlan } from "../ui/StatisticTimePlan";

export const calculatePlanPercentage = (plan: IPlan) => {
  const shipmentsPercentage =
    plan.shipments.plan > 0
      ? Math.floor((plan.shipments.processeed / plan.shipments.plan) * 100)
      : 0;

  const ordersPercentage =
    plan.orders.plan > 0
      ? Math.floor((plan.orders.processeed / plan.orders.plan) * 100)
      : 0;

  const requestsPercentage =
    plan.requests.plan > 0
      ? Math.floor((plan.requests.processeed / plan.requests.plan) * 100)
      : 0;

  return Math.floor((shipmentsPercentage + ordersPercentage + requestsPercentage) / 3);
};
