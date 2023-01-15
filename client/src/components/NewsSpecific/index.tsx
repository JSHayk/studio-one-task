import { memo, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import {
  activateEdit,
  addSpecificNews,
  cancelEdit,
} from "../../store/slices/news.slice";
import {
  $AddKeywords,
  $DeleteKeywords,
  $EditKeywords,
  $GetSpecificNews,
} from "../../api";
import { loaded, unloaded } from "../../store/slices/general.slice";
import { IKeywordsRequest } from "../../interfaces/auth";
import AddKeywordsForm from "../forms/add-keywords-form";
import EditKeywordsForm from "../forms/edit-keywords-form";
// Common
import Section from "../../common/Section";
import Container from "../../common/Container";
import Image from "../../common/Image";
import Text from "../../common/Text";
import Title from "../../common/Title";
import Button from "../../common/Button";
import "./index.scss";

const NewsSpecific = () => {
  const { id: newsId } = useParams<{ id: string }>();
  const [keywordsId, setKeywordsId] = useState<string>("");
  const {
    auth: { isLoged, data: userData },
    news: { specificData: newsData, isEdit, isSpecificLoading },
  } = useAppSelector((state) => state)!;
  const dispatch = useAppDispatch();
  const userId = userData?._id;
  const { content, title, pubDate, keywords } = newsData! || {};

  const submitForm = useCallback(
    async (sendData: IKeywordsRequest) => {
      if (!sendData?.keywords.trim()) {
        return toast.warning("Emtpy Field!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      try {
        const { ms } = await $AddKeywords(newsId!, userId!, sendData);
        toast.success(ms, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } catch (err: any) {
        toast.error("Something went wrong", {
          position: toast.POSITION.TOP_RIGHT,
        });
        throw new Error(err);
      }
    },
    [newsId, userId]
  );
  const deleteKeywords = useCallback(
    async (keywordId: string) => {
      try {
        const { ms } = await $DeleteKeywords(newsId!, keywordId);
        toast.success(ms, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } catch (err: any) {
        toast.error("Something went wrong", {
          position: toast.POSITION.TOP_RIGHT,
        });
        throw new Error(err);
      }
    },
    [newsId]
  );
  const editKeywords = useCallback(
    async (editData: IKeywordsRequest) => {
      if (!editData?.keywords.trim()) {
        return toast.warning("Emtpy Field!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      try {
        const { ms } = await $EditKeywords(newsId!, keywordsId!, editData);
        toast.success(ms, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } catch (err: any) {
        toast.error("Something went wrong", {
          position: toast.POSITION.TOP_RIGHT,
        });
        throw new Error(err);
      }
    },
    [newsId, keywordsId]
  );

  useEffect(() => {
    const getSpecificNews = async () => {
      try {
        // dispatch(unloaded());
        const data = await $GetSpecificNews(newsId!);
        dispatch(addSpecificNews(data));
        // dispatch(loaded());
      } catch (err: any) {
        throw new Error(err);
      }
    };
    getSpecificNews();
  }, [dispatch, newsId]);

  return (
    <>
      {isSpecificLoading ? (
        <p>Loading...</p>
      ) : (
        <Section className="news-specific">
          <Container className="news-specific-container wrapper">
            <Container className="news-specific-container-image">
              <Title>{title}</Title>
              <Image src="https://discussion.qodeinteractive.com/wp-content/uploads/2016/02/mustang-teases-new-model-with-powerful-promo.jpg" />
            </Container>
            <Text className="description">{content}</Text>
            <Container className="news-specific-container-date">
              <Text className="date">{pubDate}</Text>
            </Container>
            {isLoged &&
              (isEdit ? (
                <EditKeywordsForm submitForm={editKeywords} />
              ) : (
                <AddKeywordsForm submitForm={submitForm} />
              ))}
            <Container className="keywords">
              {keywords?.map((item) => {
                const { _id, keywords } = item;
                return (
                  <Container className="keyword">
                    <Text key={_id}>{keywords}</Text>
                    {isLoged && (
                      <Container className="keyword-manage">
                        <Button
                          click={() => {
                            deleteKeywords(_id);
                          }}
                          className="delete"
                        >
                          Delete
                        </Button>
                        {isEdit ? (
                          <Button
                            click={() => {
                              dispatch(cancelEdit());
                            }}
                            className="cancel"
                          >
                            Cancel
                          </Button>
                        ) : (
                          <Button
                            click={() => {
                              setKeywordsId(_id);
                              dispatch(activateEdit());
                            }}
                            className="edit"
                          >
                            Edit
                          </Button>
                        )}
                      </Container>
                    )}
                  </Container>
                );
              })}
            </Container>
          </Container>
          <ToastContainer />
        </Section>
      )}
    </>
  );
};

export default memo(NewsSpecific);
