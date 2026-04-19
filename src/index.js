/**
 * Dreaming Guard Pro - Entry Point
 * 
 * Phase 1 基础模块导出
 */

const Logger = require('./logger');
const Config = require('./config');
const StateManager = require('./state-manager');

module.exports = {
  Logger,
  Config,
  StateManager,
  
  // 版本信息
  version: '1.0.0',
  
  // 快捷创建实例
  createLogger: (options) => new Logger(options),
  createConfig: (path) => new Config(path),
  createStateManager: (options) => new StateManager(options)
};