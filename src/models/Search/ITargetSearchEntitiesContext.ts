import ITargetSearchEntity from "./Entities/ITargetSearchEntity";

export default interface ITargetSearchEntitiesContext {
    targetSearchEntities: ITargetSearchEntity[],
    onlyMainRole: boolean,
    onlyWithRiskFactors: boolean,
    tonality: string,
}


// riskFactors 	В рамках данного проекта не используется.
// themes 	В рамках данного проекта не используется.
