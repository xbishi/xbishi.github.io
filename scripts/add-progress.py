# -*- coding: utf-8 -*-
"""给 21 个项目 md 批量插入 stages/percent/versions frontmatter。
在 order: 行后插入（frontmatter 结构统一，order 是最后一个字段）。
阶段 done 由 percent 自动推导：>=100 全 done；>=70 前三 done；>=35 前二 done；>0 前一 done。
"""
import re
from pathlib import Path

BASE = Path(r"H:/BS一人公司/项目/bs-portfolio/src/content/projects")

STAGE_NAMES = ["立项调研", "核心构建", "打磨验收", "发布运营"]

def stages_yaml(pct: int) -> str:
    done_n = 4 if pct >= 100 else 3 if pct >= 70 else 2 if pct >= 35 else 1 if pct > 0 else 0
    lines = ["stages:"]
    for i, n in enumerate(STAGE_NAMES):
        lines.append(f"  - {{ name: {n}, done: {'true' if i < done_n else 'false'} }}")
    return "\n".join(lines)

# slug -> (percent, versions 列表 [(v, note)])
DATA = {
    "quncequnli": (90, [("v1.2.0", "双端上线"), ("v2.0", "重构完成 + 86 项自动化验收闭环")]),
    "ziwei-doushu": (75, [("v0.9.4", "基线版本"), ("v0.9.8", "五连版：AI 审核闸 + 免费模型通道 + 后台三 Tab")]),
    "paotuan": (70, [("M1", "契约先行架构 + 419 项测试全绿")]),
    "ai-decision-game": (60, [("v0.7-memory", "记忆系统批次在途")]),
    "ranger-demo": (80, [("v0.6", "200 项 GUT 测试骨架 + 自训 LoRA 美术")]),
    "salary-monster": (85, [("v0.5", "桌宠+记账主体完成，停在终验")]),
    "grokfilm": (100, [("v1.0", "300 条技法库 + 静态站建成")]),
    "tcm-daily": (100, [("v1.0", "日报流水线全自动上线")]),
    "tech-radar": (100, [("v1.0", "周一两班雷达上线")]),
    "fh-relevel": (100, [("v1.6.4", "按玩家反馈持续发版")]),
    "escape-room": (65, [("V2", "真机全链路打通")]),
    "local-3model": (70, [("v0.4", "四引擎互斥调度")]),
    "seedee": (75, [("v0.3", "自动化导出接 Playwright")]),
    "three-d-hub": (70, [("v0.4", "双引擎编排 + Blender 后处理")]),
    "procmodel": (65, [("v0.5", "18 个规格建模套件")]),
    "wanluotong": (80, [("在售", "淘宝店铺上线运营")]),
    "qingchuan-clinic": (85, [("运营中", "美团四线持续运营")]),
    "godot-vfx": (75, [("B3", "量产循环批次 63，585 件 PASS")]),
    "ai-phone-agent": (25, [("v0.1", "ringback 呼叫骨架落地")]),
    "douyin-muse": (70, [("第一期", "首条视频进入配音剪辑交付")]),
    "ai-short-drama": (55, [("v0.3", "Toonflow 适配器部署，待实测")]),
}

def version_yaml(vers) -> str:
    if not vers:
        return ""
    lines = ["versions:"]
    for v, note in vers:
        lines.append(f"  - {{ v: {v}, note: {note} }}")
    return "\n".join(lines)

patched = skipped = 0
for md in BASE.glob("*.md"):
    slug = md.stem
    if slug not in DATA:
        skipped += 1
        continue
    pct, vers = DATA[slug]
    text = md.read_text(encoding="utf-8")
    if "stages:" in text:
        skipped += 1
        continue
    block = f"{stages_yaml(pct)}\npercent: {pct}"
    vy = version_yaml(vers)
    if vy:
        block += f"\n{vy}"
    new_text, n = re.subn(r"(order: \d+\n)", r"\1" + block + "\n", text, count=1)
    if n != 1:
        print(f"!! {slug}: order 行未找到，跳过")
        continue
    md.write_text(new_text, encoding="utf-8")
    patched += 1

print(f"patched={patched} skipped={skipped}")
