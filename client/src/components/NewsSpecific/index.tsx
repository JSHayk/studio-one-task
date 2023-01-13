import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { addSpecificNews } from "../../store/slices/news.slice";
import { $GetSpecificNews } from "../../api";
// Common
import Section from "../../common/Section";


const NewsSpecific = () => {
  const { id } = useParams<{ id: string }>();
  const data = useAppSelector(state => state.news.specificData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getSpecificNews = async () => {
      try {
        const data = await $GetSpecificNews(id!);
        dispatch(addSpecificNews(data));
      } catch (err: any) {
        throw new Error(err);
      }
    };
    getSpecificNews();
  }, []);
  return <Section className="news-specific">
  </Section>;
};

export default NewsSpecific;
