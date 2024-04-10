import { Button } from "@components/";
import "./DocumentСard.css";
import { ScanDoc } from "@mytypes/";
import { useEffect, useState, useRef } from "react";
import { dateFormatDots } from "@utils/dateFormat";
import { Link } from "react-router-dom";
import { wordFormat } from "@utils/wordFormat";

const DocumentСard = ({ documentItem }: { documentItem: ScanDoc }) => {
    const [haveImage, setHaveImage] = useState(false);

    const titleRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLHeadingElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    let titleFromXML: string | null = "";
    let contentFromXML: string | null = "";
    let titlePart: string;
    let contentPart: string;
    let imgURLs: (string | null)[];

    useEffect(() => {
        const parser = new DOMParser();
        const xmlDocTitle = parser.parseFromString(
            documentItem.title.markup,
            "text/xml"
        );
        titleFromXML = xmlDocTitle.all[0].textContent;

        const xmlDocContent = parser.parseFromString(
            documentItem.content.markup,
            "text/xml"
        );
        contentFromXML = xmlDocContent.all[0].textContent;

        if (titleFromXML && contentFromXML) {
            const allText = titleFromXML + contentFromXML;
            // находим индекс первого вхождения тега <data>
            const indexOfDataTag = allText.indexOf("<data>");

            // проверяем, найден ли тег <data>
            if (indexOfDataTag !== -1) {
                // Разделяем строку на две части
                titlePart = allText.substring(0, indexOfDataTag);
                contentPart = allText.substring(indexOfDataTag);

                // убираем теги data body из contentPart
                contentPart = contentPart.replace(
                    /<data>|<\/data>|<body>|<\/body>/g,
                    ""
                );

                // ищем изображения
                const regex = /<img\s+src="([^"]+)">/g;
                const matches = contentPart.match(regex);

                if (matches) {
                    imgURLs = matches.map(match => {
                        const urlMatch = match.match(/<img\s+src="([^"]+)">/);
                        return urlMatch ? urlMatch[1] : null;
                    });
                    setHaveImage(true);
                    // убираем изначальное изображение из контента
                    contentPart = contentPart.replace(regex, "");

                    if (imageRef.current && imgURLs[0]) {
                        imageRef.current.src = imgURLs[0]
                    }
                }
            } else {
                titlePart = titleFromXML;
                contentPart = contentFromXML;
            }

            if (titleRef.current) {
                titleRef.current.textContent = titlePart;
            }

            if (contentPart.length > 1000) {
                contentPart = contentPart.substring(0, 1000) + "...";
            }

            if (contentRef.current) {
                contentRef.current.innerHTML = contentPart;
            }
        }
    });

    return (
        <div className="document-card">
            <div className="document-card__header">
                {dateFormatDots(new Date(documentItem.issueDate))}
                <a href={documentItem.url}>{documentItem.source.name}</a>
            </div>
            <div className="document-card__content">
                <div className="document-card__content__body">
                    <h1
                        ref={titleRef}
                        className="document-card__content__body__title"
                    ></h1>

                    {documentItem.attributes.isTechNews ? (
                        <p className="document-card__content__body__type document-card__content__body__type--tech">
                            Технические новости
                        </p>
                    ) : documentItem.attributes.isAnnouncement ? (
                        <p className="document-card__content__body__type document-card__content__body__type--anonce">
                            Анонсы и события
                        </p>
                    ) : documentItem.attributes.isDigest ? (
                        <p className="document-card__content__body__type document-card__content__body__type--digest">
                            сводки новостей
                        </p>
                    ) : null}
                    {haveImage ?
                        <div className="document-card__content__body__image-box">
                            <img ref={imageRef} className="document-card__content__body__image-box__image" alt="" />
                        </div>
                        : null
                    }
                    <p
                        ref={contentRef}
                        className="document-card__content__body__text"
                    ></p>
                </div>
                <div className="document-card__content__footer">
                    <Link to={documentItem.url} className="document-card__content__footer__link">
                        <Button
                            className="document-card__content__footer__button"
                            title="Читать в источнике"
                            color="light-green"
                            size="large"
                        />
                    </Link>
                    <p className="document-card__content__footer__word-count">
                        {documentItem.attributes.wordCount} {documentItem.attributes.wordCount && wordFormat(documentItem.attributes.wordCount)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export { DocumentСard };
