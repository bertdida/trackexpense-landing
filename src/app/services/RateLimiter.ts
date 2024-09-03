type RateLimiterConfig = {
  /**
   * @param windowSize - The size of the window in seconds.
   */
  windowSize: number;

  /**
   * @param maxRequests - The maximum number of requests allowed in the window.
   */
  maxRequests: number;
};

export default class RateLimiter {
  private windowSize: number;
  private maxRequests: number;
  private idToWindows: Map<string, number[]>;

  constructor({ windowSize, maxRequests }: RateLimiterConfig) {
    this.windowSize = windowSize;
    this.maxRequests = maxRequests;
    this.idToWindows = new Map();
  }

  limit(id: string): boolean {
    const now = Date.now();
    const queue = this.idToWindows.get(id) || [];

    const windowSizeInMs = this.windowSize * 1000;

    // Remove outdated timestamps
    while (queue.length > 0 && now - queue[0] > windowSizeInMs) {
      queue.shift();
    }

    // Is rate limited?
    if (queue.length >= this.maxRequests) {
      return true;
    }

    // Update queue and allow request
    queue.push(now);
    this.idToWindows.set(id, queue);

    return false;
  }
}
