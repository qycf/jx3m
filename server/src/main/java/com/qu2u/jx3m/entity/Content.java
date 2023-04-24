package com.qu2u.jx3m.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * <p>
 * 
 * </p>
 *
 * @author qiuyue
 * @since 2023-03-20
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Content implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    private String title;
    private String subtitle;

    private Integer articleId;

    private String sentence;

    private String imgUrl;

    private LocalDateTime createTime;

}
