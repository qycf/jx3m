package com.qu2u.jx3m.mapper;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.qu2u.jx3m.entity.Article;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.qu2u.jx3m.pojo.ArticlelListVo;
import com.qu2u.jx3m.pojo.articleVo;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * <p>
 * Mapper 接口
 * </p>
 *
 * @author qiuyue
 * @since 2023-03-19
 */
public interface ArticleMapper extends BaseMapper<Article> {
    @Select("SELECT a.*,m.title as map FROM `article` a LEFT JOIN article_map am ON a.id = am.a_id LEFT JOIN maps m ON am.m_id = m.id WHERE m.code = IFNULL(#{map}, m.code)")
    List<ArticlelListVo> getArticleByMap(String map);

    @Select("SELECT a.*,m.title as map FROM `article` a LEFT JOIN article_map am ON a.id = am.a_id LEFT JOIN maps m ON am.m_id = m.id WHERE m.code = IFNULL(#{map}, m.code)")
    List<ArticlelListVo> getArticlePageByMap(IPage<Article> page, String map);

    @Select("SELECT\n" +
            "\t\tc.*,\n" +
            "\t\ta.submap,\n" +
            "\t\ta.title\n" +
            "FROM\n" +
            "\t`content` c\n" +
            "\tLEFT JOIN article a ON a.id = c.article_id \n" +
            "WHERE\n" +
            "\ta.id =#{id}")
    List<articleVo> getArticleContent(int id);
}