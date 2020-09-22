  // Bar 1
  ctx.fillStyle = `hsl(0, 100%, 50%)`;
  ctx.fillRect(
      CLOUD_X + GAP_BETWEEN_BARS + (GAP_BETWEEN_BARS + BAR_WIDTH) * 0,
      CLOUD_Y + textIntroduction + TEXT_HEIGHT + TEXT_GAP * 2,
      BAR_WIDTH,
      BAR_HEIGHT
  );
  // Text for Bar 1
  ctx.fillText(
      `Вы`,
      CLOUD_X + GAP_BETWEEN_BARS + (GAP_BETWEEN_BARS + BAR_WIDTH) * 0,
      (CLOUD_Y + CLOUD_HEIGHT) - (TEXT_GAP + TEXT_HEIGHT));

  // Bar 2
  ctx.fillStyle = `hsl(240, 100%, 50%)`;
  ctx.fillRect(
      CLOUD_X + GAP_BETWEEN_BARS + (GAP_BETWEEN_BARS + BAR_WIDTH) * 1,
      CLOUD_Y + textIntroduction + TEXT_HEIGHT + TEXT_GAP * 2,
      BAR_WIDTH,
      BAR_HEIGHT
  );
  // Text for Bar 2
  ctx.fillText(
      `Кекс`,
      CLOUD_X + GAP_BETWEEN_BARS + (GAP_BETWEEN_BARS + BAR_WIDTH) * 1,
      (CLOUD_Y + CLOUD_HEIGHT) - (TEXT_GAP + TEXT_HEIGHT));

  // Bar 3
  ctx.fillStyle = `hsl(240, 100%, 50%)`;
  ctx.fillRect(
      CLOUD_X + GAP_BETWEEN_BARS + (GAP_BETWEEN_BARS + BAR_WIDTH) * 2,
      CLOUD_Y + textIntroduction + TEXT_HEIGHT + TEXT_GAP * 2,
      BAR_WIDTH,
      BAR_HEIGHT
  );
  // Text for Bar 3
  ctx.fillText(
      `Катя`,
      CLOUD_X + GAP_BETWEEN_BARS + (GAP_BETWEEN_BARS + BAR_WIDTH) * 2,
      (CLOUD_Y + CLOUD_HEIGHT) - (TEXT_GAP + TEXT_HEIGHT));

  // Bar 4
  ctx.fillStyle = `hsl(240, 100%, 50%)`;
  ctx.fillRect(
      CLOUD_X + GAP_BETWEEN_BARS + (GAP_BETWEEN_BARS + BAR_WIDTH) * 3,
      CLOUD_Y + textIntroduction + TEXT_HEIGHT + TEXT_GAP * 2,
      BAR_WIDTH,
      BAR_HEIGHT
  );
  // Text for Bar 4
  ctx.fillText(
      `Игорь`,
      CLOUD_X + GAP_BETWEEN_BARS + (GAP_BETWEEN_BARS + BAR_WIDTH) * 3,
      (CLOUD_Y + CLOUD_HEIGHT) - (TEXT_GAP + TEXT_HEIGHT));

}
