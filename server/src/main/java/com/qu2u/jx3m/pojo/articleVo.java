package com.qu2u.jx3m.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class articleVo implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Integer id;

    private String title;

    private String submap;

    private String imgUrl;

    private Integer articleId;

    private String sentence;

    @JsonFormat(pattern="yyyy-MM-dd hh:mm") //从数据库读出日期格式时，进行转换的规则
    private LocalDateTime createTime;

}
