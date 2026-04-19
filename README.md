# Dreaming Guard Pro

> 防止OpenClaw dreaming文件无限积累导致OOM崩溃的智能保护系统

## 功能特性

- **实时监控**: 监控dreaming文件增长趋势
- **智能归档**: 分级归档策略，保留有价值数据
- **自动压缩**: 智能降级压缩，减少空间占用
- **进程保护**: 内存监控，危险时主动干预
- **崩溃自愈**: 自动检测崩溃并恢复
- **健康报告**: 可视化状态报告

## 安装

```bash
cd projects/dreaming-guard-pro
npm install
```

## 快速开始

```javascript
const { Logger, Config, StateManager } = require('./src');

// 日志系统
const logger = new Logger({ level: 'info' });
logger.info('Starting Dreaming Guard Pro');

// 配置管理
const config = new Config();
config.load();
const threshold = config.get('thresholds.warning');

// 状态管理
const state = new StateManager();
await state.load();
state.setCheckpoint({ lastCheck: Date.now(), status: 'healthy' });
await state.save();
```

## 模块说明

### Logger (src/logger.js)
统一日志管理，支持多级别输出和自动轮转。

```javascript
const logger = new Logger({
  level: 'debug',           // 日志级别
  file: '~/.openclaw/logs/dreaming-guard.log',
  maxSize: 5 * 1024 * 1024  // 5MB自动轮转
});

logger.debug('Debug message');
logger.info('Info message');
logger.warn('Warning message');
logger.error('Error message');
```

### Config (src/config.js)
配置管理，支持文件配置和环境变量覆盖。

```javascript
const config = new Config();
await config.load();

const threshold = config.get('thresholds.warning');
config.set('thresholds.critical', 1048576);

// 环境变量覆盖: DREAMING_GUARD_THRESHOLD_WARNING=524288
```

配置文件位置: `~/.openclaw/dreaming-guard.json`

### StateManager (src/state-manager.js)
状态持久化，支持崩溃恢复。

```javascript
const state = new StateManager();
await state.load();

// 保存监控状态
state.save({
  monitors: { ... },
  actions: [ ... ]
});

// 检查点管理
const checkpoint = state.getCheckpoint();
state.setCheckpoint({ lastCheck: Date.now(), status: 'healthy' });
```

状态文件位置: `~/.openclaw/dreaming-guard-state.json`

## 开发进度

- [x] Phase 1: 基础设施 (Logger, Config, StateManager)
- [ ] Phase 2: 核心功能 (Monitor, Archiver, Compressor)
- [ ] Phase 3: 智能分析 (Analyzer, Decision)
- [ ] Phase 4: 保护机制 (Protector, Healer)
- [ ] Phase 5: 完善与集成 (Reporter, Index)

## License

MIT