function normalizeUnits(manifest) {
  const normalized = {
    ...manifest
  }
  if (normalized.unit === "lb") {
    normalized.weight = normalized.weight * 0.45;
    normalized.unit = "kg";
  }
  return normalized;
}

function validateManifest(manifest) {
  const result = {}

  if (manifest.containerId === undefined) {
    result.containerId = "Missing";
  } else if (
    typeof manifest.containerId !== "number" ||
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    result.containerId = "Invalid";
  }
  if (manifest.destination === undefined) {
    result.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
    result.destination = "Invalid";
  }
  if (manifest.weight === undefined) {
    result.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || manifest.weight <= 0 || Number.isNaN(manifest.weight)) {
    result.weight = "Invalid";
  }
  if (manifest.unit === undefined) {
    result.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    result.unit = "Invalid";
  }
  if (manifest.hazmat === undefined) {
    result.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    result.hazmat = "Invalid";
  }

  return result;
}

function processManifest(manifest) {
  const validation = validateManifest(manifest);

  if (Object.keys(validation).length > 0) {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validation);
  } else {
    const normalized = normalizeUnits(manifest);
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  }
}
