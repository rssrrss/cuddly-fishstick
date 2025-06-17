import { ApproveCancellation } from "./approve_cancellation";
import { ApproveReturn } from "./approve_return";
import { CalculateRefund } from "./calculate_refund";
import { CancelOrder } from "./cancel_order";
import { CreateReturn } from "./create_return";
import { GetAftersaleEligibility } from "./get_aftersale_eligibility";
import { GetRejectReasons } from "./get_reject_reasons";
import { GetReturnRecords } from "./get_return_records";
import { RejectCancellation } from "./reject_cancellation";
import { RejectReturn } from "./reject_return";
import { SearchCancellations } from "./search_cancellations";
import { SearchReturns } from "./search_returns";

export class ReturnRefund {
  static GetAftersaleEligibility = GetAftersaleEligibility
  static GetRejectReasons = GetRejectReasons
  static CreateReturn = CreateReturn
  static ApproveReturn = ApproveReturn
  static RejectReturn = RejectReturn
  static SearchReturns = SearchReturns
  static GetReturnRecords = GetReturnRecords
  static CancelOrder = CancelOrder
  static ApproveCancellation = ApproveCancellation
  static RejectCancellation = RejectCancellation
  static SearchCancellations = SearchCancellations
  static CalculateRefund = CalculateRefund
}
