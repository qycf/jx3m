package com.qu2u.jx3m.controller;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.qu2u.jx3m.mapper.ArticleMapper;
import com.qu2u.jx3m.pojo.ArticlelListVo;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author qiuyue
 * @since 2023-03-19
 */
@RestController
@RequestMapping("/jx3m/article")
public class ArticleController {

    @Resource
    private ArticleMapper articleMapper;

    @GetMapping()
    Object article(@RequestParam int page, @RequestParam(required = false) String map) {

        List<ArticlelListVo> articlePageByMap = articleMapper.getArticlePageByMap(new Page<>(page, 5), map);
//        统计有多少页
        int count = articleMapper.getArticleByMap(map).size();
//        统计页面数量，不足5条的也算一页
        int pages = (int) (count / 5);
        if (count % 5 != 0) {
            pages++;
        }
        HashMap<String, Object> stringObjectHashMap = new HashMap<>();
        stringObjectHashMap.put("pages", pages);
        stringObjectHashMap.put("count", count);
        stringObjectHashMap.put("data", articlePageByMap);
        System.out.println(stringObjectHashMap);
        return stringObjectHashMap;

//        return PageDtoUtil.getPageDto(articleMapper.getArticleByMap(map), pageNum, 10);
    }

    @GetMapping("/{id}")
    Object articleById(@PathVariable int id) {
        return articleMapper.getArticleContent(id);
    }
}
