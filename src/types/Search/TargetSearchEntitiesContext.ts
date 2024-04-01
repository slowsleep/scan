import { TargetSearchEntity } from "./Entities/TargetSearchEntity";

export type TargetSearchEntitiesContext = {
    targetSearchEntities: TargetSearchEntity[],
    onlyMainRole: boolean,
    onlyWithRiskFactors: boolean,
    tonality: string,
}

// riskFactors 	В рамках данного проекта не используется.
// themes 	В рамках данного проекта не используется.
