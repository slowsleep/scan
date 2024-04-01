import { EventFiltersInfo } from "@mytypes/";

import "./AccountLimits.css";

const AccountLimits = ({info}: {info:EventFiltersInfo}) => {
  return (
    <div className="account-limits">
        <p className="account-limits__text">Использовано компаний </p>
        <p className="account-limits__count">{info.usedCompanyCount}</p>

        <p className="account-limits__text">Лимит по компаниям</p>
        <p className=" account-limits__count account-limits__count--limit">{info.companyLimit}</p>
    </div>
  )
}

export { AccountLimits };
