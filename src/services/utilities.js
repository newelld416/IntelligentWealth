export function formatCurrency(value) {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    return formatter.format(value);
}

export function formatYearFromDate(value) {
  return value.substring(0, 4);
}