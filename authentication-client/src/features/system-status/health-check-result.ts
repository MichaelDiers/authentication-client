/**
 * Decribes the result of a health check.
 */
export default interface IHealthCheckResult {
  /**
   * The global status of all health checks.
   */
  status: 'error' | 'ok' | 'shutting_down';
}
