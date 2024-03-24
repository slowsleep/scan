import Button from "../Button/Button";
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
                    <p>Технические новости</p>
                ) : document.attributes.isAnnouncement ? (
                    <p>Анонсы и события</p>
                ) : document.attributes.isDigest ? (
                    <p>сводки новостей</p>
                ) : (
                    <p>а?</p>
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
                {document.attributes.wordCount}
            </div>
        </div>
    );
};

export default DocumentСard;
