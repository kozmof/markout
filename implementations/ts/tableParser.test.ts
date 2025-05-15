import { describe, expect, test } from 'vitest'
import { tableParser } from './tableParser'

describe('tableParser', () => {
  test('basic test 1', () => {
    const lines = [
      '=',
      ': header_name_a',
      ': header_name_b',
      ': header_name_c',
      '=',
      ': content_a_1',
      ': content_b_1',
      ': content_c_1',
      '-',
      ': content_a_2',
      ': content_b_2',
      ': content_c_2',
      '-'
    ]
    expect(tableParser(lines)).toStrictEqual(
      [
        ['header_name_a', 'header_name_b', 'header_name_c'],
        ['content_a_1', 'content_b_1', 'content_c_1'],
        ['content_a_2', 'content_b_2', 'content_c_2']
      ]
    )
  })
  test('basic test 2', () => {
    const lines = [
      '=',
      ': header_name_a',
      ': header_name_b',
      ': header_name_c',
      '=',
      ': content_a_1',
      ': content_b_1',
      ': content_c_1',
      '-',
    ]
    expect(tableParser(lines)).toStrictEqual(
      [
        ['header_name_a', 'header_name_b', 'header_name_c'],
        ['content_a_1', 'content_b_1', 'content_c_1'],
      ]
    )
  })
})
