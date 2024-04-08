import { EventFiltersInfo } from "@mytypes/";

import "./AccountLimits.css";
import spinner from "@assets/img/spinner.svg";

interface AccountLimitsProps {
  info: EventFiltersInfo,
  loading?: boolean,
}

const AccountLimits = ({info, loading} : AccountLimitsProps) => {
  return (
    <div className={"account-limits " + (loading ? "account-limits--loading" : "")}>
        {loading ? <img className="account-limits__spinner" src={spinner} /> :
          <>
            <p className="account-limits__text">Использовано компаний </p>
            <p className="account-limits__count">{info.usedCompanyCount}</p>

            <p className="account-limits__text">Лимит по компаниям</p>
            <p className=" account-limits__count account-limits__count--limit">{info.companyLimit}</p>
          </>
        }
    </div>
  )
}

export { AccountLimits };
