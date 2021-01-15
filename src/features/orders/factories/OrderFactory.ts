import { Order } from "src/features/orders/domain/model/Order";
import { NetResponse } from "src/features/orders/domain/remote/NetResponse";

export class OrderFactory {
  static createArrayFromNet(netResponse: NetResponse): Order[] {
    const { orders } = netResponse;
    const result = orders.sort((a, b) => a.date.localeCompare(b.date)).reverse();
    return result;
  }
}
