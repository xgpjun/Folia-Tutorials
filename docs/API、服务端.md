---
sidebar_position: 4
---

## API

使用Maven 

添加Maven仓库：

```
<repository>
    <id>papermc</id>
    <url>https://repo.papermc.io/repository/maven-public/</url>
</repository>
```

导入依赖：

```
<dependency>
    <groupId>dev.folia</groupId>
    <artifactId>folia-api</artifactId>
    <version>1.20.1-R0.1-SNAPSHOT</version>
    <scope>provided</scope>
</dependency>
```

## 服务端
:::tip

由于该服务端并没有任何的[Releases](https://github.com/PaperMC/Folia/releases)，因此你需要自行构建: [PaperMC/Folia](https://github.com/PaperMC/Folia)


:::

如果你实在想偷懒...

[Forks · PaperMC/Folia (github.com)](https://github.com/PaperMC/Folia/forks) 找一下看看有没有好心人最近更新然后上传了Releases， 比如[它](https://github.com/alazeprt/Folia)?

我不保证这些Forks是没有经过修改的，所以请自行鉴别。 担心安全请自行构建。



## 注意事项！

:::tip

请不要通过下载压缩包的方式来尝试构建，你需要安装Git 在希望保存的文件夹使用GitBash来克隆仓库。

:::


```bash
git clone https://github.com/PaperMC/Folia.git
```

然后使用`./gradlew build` 、`gradlew.bat build`来构建 。



如果构建服务端、插件失败 提示

> bad class file (错误的类文件) org.bukkit.XXX
>
> class file has wrong version 61.0, should be 52.0 (类文件具有错误的版本 61.0, 应为 52.0)

52.0 是`Jdk8` ， 应该改位61 `Jdk17`

一般来说你可以分开提供`Spigot` 和`Folia`的插件, 当然你也可以通过判断服务端类型后进行不同的逻辑执行，实现通用。

但注意,如果你基于`Java17`开发并且使用了语言的新特性，那么这个插件基本上就和`Java8` 即一些低版本告别了。 SDK使用`Java17`，你仍需要使用`Java8`的语言特性，除非你根本不想兼容低版本。

你可以通过反射独有类来判断服务端类型，例如 `io.papermc.paper.threadedregions.RegionizedServerInitEvent` 这个是`Folia`有而`Paper`、`Spigot`没有的类。

