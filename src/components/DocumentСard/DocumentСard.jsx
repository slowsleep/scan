// import Button from "../Button/Button";
// import { Button } from "../../components";
import { Button } from "../";
import "./DocumentСard.css";

const DocumentСard = ({ document }) => {
    return (
        <div className="document-card">
            <div className="document-card__header">
                {document.issueDate}
                <a href={document.url}>{document.source.name}</a>
            </div>
            <div className="document-card__content">
              <h1>{document.title}</h1>

                {document.attributes.isTechNews ? (
                    <p className="document-card__content__type">Технические новости</p>
                ) : document.attributes.isAnnouncement ? (
                    <p className="document-card__content__type">Анонсы и события</p>
                ) : document.attributes.isDigest ? (
                    <p className="document-card__content__type">сводки новостей</p>
                ) : (
                    <p></p>
                )}
                <img src={document.image} alt="" />
                <p>{document.content}</p>
            </div>
            <div className="document-card__footer">
                <Button
                    title="Читать в источнике"
                    color="light-green"
                    size="large"
                />
                <p className="document-card__footer__word-count">{document.attributes.wordCount}</p>
            </div>
        </div>
    );
};

export { DocumentСard };
